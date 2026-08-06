# `dataGoogleOracleDatabaseGoldengateConnectionTypes` Submodule <a name="`dataGoogleOracleDatabaseGoldengateConnectionTypes` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypes <a name="DataGoogleOracleDatabaseGoldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types google_oracle_database_goldengate_connection_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes(scope: Construct, id: string, config: DataGoogleOracleDatabaseGoldengateConnectionTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig">DataGoogleOracleDatabaseGoldengateConnectionTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig">DataGoogleOracleDatabaseGoldengateConnectionTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateConnectionTypes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateConnectionTypes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateConnectionTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateConnectionTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateConnectionTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.goldengateConnectionTypes">goldengateConnectionTypes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `goldengateConnectionTypes`<sup>Required</sup> <a name="goldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.goldengateConnectionTypes"></a>

```typescript
public readonly goldengateConnectionTypes: DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypesConfig <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseGoldengateConnectionTypesConfig: dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types#id DataGoogleOracleDatabaseGoldengateConnectionTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types#location DataGoogleOracleDatabaseGoldengateConnectionTypes#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types#id DataGoogleOracleDatabaseGoldengateConnectionTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_goldengate_connection_types#project DataGoogleOracleDatabaseGoldengateConnectionTypes#project}

---

### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes: dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateConnectionTypes } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.technologyTypes">technologyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `technologyTypes`<sup>Required</sup> <a name="technologyTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.technologyTypes"></a>

```typescript
public readonly technologyTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes</a>

---



