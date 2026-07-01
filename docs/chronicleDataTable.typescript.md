# `chronicleDataTable` Submodule <a name="`chronicleDataTable` Submodule" id="@cdktn/provider-google.chronicleDataTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataTable <a name="ChronicleDataTable" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table google_chronicle_data_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

new chronicleDataTable.ChronicleDataTable(scope: Construct, id: string, config: ChronicleDataTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo">putColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo">putScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo">resetColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive">resetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo">resetScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnInfo` <a name="putColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo"></a>

```typescript
public putColumnInfo(value: IResolvable | ChronicleDataTableColumnInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---

##### `putScopeInfo` <a name="putScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo"></a>

```typescript
public putScopeInfo(value: ChronicleDataTableScopeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleDataTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---

##### `resetColumnInfo` <a name="resetColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo"></a>

```typescript
public resetColumnInfo(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRowTimeToLive` <a name="resetRowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive"></a>

```typescript
public resetRowTimeToLive(): void
```

##### `resetScopeInfo` <a name="resetScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo"></a>

```typescript
public resetScopeInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

chronicleDataTable.ChronicleDataTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

chronicleDataTable.ChronicleDataTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

chronicleDataTable.ChronicleDataTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

chronicleDataTable.ChronicleDataTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleDataTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleDataTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount">approximateRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo">columnInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid">dataTableUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime">rowTimeToLiveUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount">ruleAssociationsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource">updateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput">columnInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput">dataTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput">rowTimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput">scopeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId">dataTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `approximateRowCount`<sup>Required</sup> <a name="approximateRowCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount"></a>

```typescript
public readonly approximateRowCount: number;
```

- *Type:* number

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo"></a>

```typescript
public readonly columnInfo: ChronicleDataTableColumnInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataTableUuid`<sup>Required</sup> <a name="dataTableUuid" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid"></a>

```typescript
public readonly dataTableUuid: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rowTimeToLiveUpdateTime`<sup>Required</sup> <a name="rowTimeToLiveUpdateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime"></a>

```typescript
public readonly rowTimeToLiveUpdateTime: string;
```

- *Type:* string

---

##### `ruleAssociationsCount`<sup>Required</sup> <a name="ruleAssociationsCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount"></a>

```typescript
public readonly ruleAssociationsCount: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `scopeInfo`<sup>Required</sup> <a name="scopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo"></a>

```typescript
public readonly scopeInfo: ChronicleDataTableScopeInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleDataTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a>

---

##### `updateSource`<sup>Required</sup> <a name="updateSource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource"></a>

```typescript
public readonly updateSource: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `columnInfoInput`<sup>Optional</sup> <a name="columnInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput"></a>

```typescript
public readonly columnInfoInput: IResolvable | ChronicleDataTableColumnInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---

##### `dataTableIdInput`<sup>Optional</sup> <a name="dataTableIdInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput"></a>

```typescript
public readonly dataTableIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rowTimeToLiveInput`<sup>Optional</sup> <a name="rowTimeToLiveInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput"></a>

```typescript
public readonly rowTimeToLiveInput: string;
```

- *Type:* string

---

##### `scopeInfoInput`<sup>Optional</sup> <a name="scopeInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput"></a>

```typescript
public readonly scopeInfoInput: ChronicleDataTableScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleDataTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rowTimeToLive`<sup>Required</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataTableColumnInfo <a name="ChronicleDataTableColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

const chronicleDataTableColumnInfo: chronicleDataTable.ChronicleDataTableColumnInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex">columnIndex</a></code> | <code>number</code> | Column Index. 0,1,2... |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn">originalColumn</a></code> | <code>string</code> | Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads). |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType">columnType</a></code> | <code>string</code> | Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn">keyColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to include this column in the calculation of the row ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath">mappedColumnPath</a></code> | <code>string</code> | Entity proto field path that the column is mapped to. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues">repeatedValues</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the column is a repeated values column. |

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex"></a>

```typescript
public readonly columnIndex: number;
```

- *Type:* number

Column Index. 0,1,2...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#column_index ChronicleDataTable#column_index}

---

##### `originalColumn`<sup>Required</sup> <a name="originalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn"></a>

```typescript
public readonly originalColumn: string;
```

- *Type:* string

Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads).

It must satisfy the
following requirements:
- Starts with letter.
- Contains only letters, numbers and underscore.
- Must be unique and has length < 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#original_column ChronicleDataTable#original_column}

---

##### `columnType`<sup>Optional</sup> <a name="columnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#column_type ChronicleDataTable#column_type}

---

##### `keyColumn`<sup>Optional</sup> <a name="keyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn"></a>

```typescript
public readonly keyColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to include this column in the calculation of the row ID.

If no columns have key_column = true, all columns will be included in the
calculation of the row ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#key_column ChronicleDataTable#key_column}

---

##### `mappedColumnPath`<sup>Optional</sup> <a name="mappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath"></a>

```typescript
public readonly mappedColumnPath: string;
```

- *Type:* string

Entity proto field path that the column is mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#mapped_column_path ChronicleDataTable#mapped_column_path}

---

##### `repeatedValues`<sup>Optional</sup> <a name="repeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues"></a>

```typescript
public readonly repeatedValues: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the column is a repeated values column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#repeated_values ChronicleDataTable#repeated_values}

---

### ChronicleDataTableConfig <a name="ChronicleDataTableConfig" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

const chronicleDataTableConfig: chronicleDataTable.ChronicleDataTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId">dataTableId</a></code> | <code>string</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description">description</a></code> | <code>string</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo">columnInfo</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | column_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:
- Starts with letter.
- Contains only letters, numbers and underscore.
- Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#data_table_id ChronicleDataTable#data_table_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#description ChronicleDataTable#description}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#instance ChronicleDataTable#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#location ChronicleDataTable#location}

---

##### `columnInfo`<sup>Optional</sup> <a name="columnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo"></a>

```typescript
public readonly columnInfo: IResolvable | ChronicleDataTableColumnInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#column_info ChronicleDataTable#column_info}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#deletion_policy ChronicleDataTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#row_time_to_live ChronicleDataTable#row_time_to_live}

---

##### `scopeInfo`<sup>Optional</sup> <a name="scopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo"></a>

```typescript
public readonly scopeInfo: ChronicleDataTableScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#scope_info ChronicleDataTable#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleDataTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#timeouts ChronicleDataTable#timeouts}

---

### ChronicleDataTableScopeInfo <a name="ChronicleDataTableScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

const chronicleDataTableScopeInfo: chronicleDataTable.ChronicleDataTableScopeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes">dataAccessScopes</a></code> | <code>string[]</code> | Contains the list of scope names of the data table. |

---

##### `dataAccessScopes`<sup>Required</sup> <a name="dataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes"></a>

```typescript
public readonly dataAccessScopes: string[];
```

- *Type:* string[]

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#data_access_scopes ChronicleDataTable#data_access_scopes}

---

### ChronicleDataTableTimeouts <a name="ChronicleDataTableTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

const chronicleDataTableTimeouts: chronicleDataTable.ChronicleDataTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataTableColumnInfoList <a name="ChronicleDataTableColumnInfoList" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

new chronicleDataTable.ChronicleDataTableColumnInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get"></a>

```typescript
public get(index: number): ChronicleDataTableColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleDataTableColumnInfo[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---


### ChronicleDataTableColumnInfoOutputReference <a name="ChronicleDataTableColumnInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

new chronicleDataTable.ChronicleDataTableColumnInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType">resetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn">resetKeyColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath">resetMappedColumnPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues">resetRepeatedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnType` <a name="resetColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType"></a>

```typescript
public resetColumnType(): void
```

##### `resetKeyColumn` <a name="resetKeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn"></a>

```typescript
public resetKeyColumn(): void
```

##### `resetMappedColumnPath` <a name="resetMappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath"></a>

```typescript
public resetMappedColumnPath(): void
```

##### `resetRepeatedValues` <a name="resetRepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues"></a>

```typescript
public resetRepeatedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput">columnIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput">keyColumnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput">mappedColumnPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput">originalColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput">repeatedValuesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex">columnIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn">keyColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath">mappedColumnPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn">originalColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues">repeatedValues</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnIndexInput`<sup>Optional</sup> <a name="columnIndexInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput"></a>

```typescript
public readonly columnIndexInput: number;
```

- *Type:* number

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `keyColumnInput`<sup>Optional</sup> <a name="keyColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput"></a>

```typescript
public readonly keyColumnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mappedColumnPathInput`<sup>Optional</sup> <a name="mappedColumnPathInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput"></a>

```typescript
public readonly mappedColumnPathInput: string;
```

- *Type:* string

---

##### `originalColumnInput`<sup>Optional</sup> <a name="originalColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput"></a>

```typescript
public readonly originalColumnInput: string;
```

- *Type:* string

---

##### `repeatedValuesInput`<sup>Optional</sup> <a name="repeatedValuesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput"></a>

```typescript
public readonly repeatedValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex"></a>

```typescript
public readonly columnIndex: number;
```

- *Type:* number

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `keyColumn`<sup>Required</sup> <a name="keyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn"></a>

```typescript
public readonly keyColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mappedColumnPath`<sup>Required</sup> <a name="mappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath"></a>

```typescript
public readonly mappedColumnPath: string;
```

- *Type:* string

---

##### `originalColumn`<sup>Required</sup> <a name="originalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn"></a>

```typescript
public readonly originalColumn: string;
```

- *Type:* string

---

##### `repeatedValues`<sup>Required</sup> <a name="repeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues"></a>

```typescript
public readonly repeatedValues: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleDataTableColumnInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>

---


### ChronicleDataTableScopeInfoOutputReference <a name="ChronicleDataTableScopeInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

new chronicleDataTable.ChronicleDataTableScopeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput">dataAccessScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes">dataAccessScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataAccessScopesInput`<sup>Optional</sup> <a name="dataAccessScopesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput"></a>

```typescript
public readonly dataAccessScopesInput: string[];
```

- *Type:* string[]

---

##### `dataAccessScopes`<sup>Required</sup> <a name="dataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes"></a>

```typescript
public readonly dataAccessScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleDataTableScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---


### ChronicleDataTableTimeoutsOutputReference <a name="ChronicleDataTableTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleDataTable } from '@cdktn/provider-google'

new chronicleDataTable.ChronicleDataTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleDataTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---



