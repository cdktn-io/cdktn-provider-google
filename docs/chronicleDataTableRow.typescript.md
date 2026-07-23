# `chronicleDataTableRow` Submodule <a name="`chronicleDataTableRow` Submodule" id="@cdktn/provider-google.chronicleDataTableRow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataTableRow <a name="ChronicleDataTableRow" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row google_chronicle_data_table_row}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

new chronicleDataTableRow.ChronicleDataTableRow(scope: Construct, id: string, config: ChronicleDataTableRowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig">ChronicleDataTableRowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig">ChronicleDataTableRowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetRowTimeToLive">resetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleDataTableRowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRowTimeToLive` <a name="resetRowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetRowTimeToLive"></a>

```typescript
public resetRowTimeToLive(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataTableRow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

chronicleDataTableRow.ChronicleDataTableRow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleDataTableRow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleDataTableRow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleDataTableRow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataTableRow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableRow">dataTableRow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference">ChronicleDataTableRowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableIdInput">dataTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLiveInput">rowTimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableId">dataTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataTableRow`<sup>Required</sup> <a name="dataTableRow" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableRow"></a>

```typescript
public readonly dataTableRow: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleDataTableRowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference">ChronicleDataTableRowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataTableIdInput`<sup>Optional</sup> <a name="dataTableIdInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableIdInput"></a>

```typescript
public readonly dataTableIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rowTimeToLiveInput`<sup>Optional</sup> <a name="rowTimeToLiveInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLiveInput"></a>

```typescript
public readonly rowTimeToLiveInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleDataTableRowTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rowTimeToLive`<sup>Required</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataTableRowConfig <a name="ChronicleDataTableRowConfig" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.Initializer"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

const chronicleDataTableRowConfig: chronicleDataTableRow.ChronicleDataTableRowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dataTableId">dataTableId</a></code> | <code>string</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.instance">instance</a></code> | <code>string</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.location">location</a></code> | <code>string</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.values">values</a></code> | <code>string[]</code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.rowTimeToLive">rowTimeToLive</a></code> | <code>string</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#data_table_id ChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#instance ChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#location ChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#values ChronicleDataTableRow#values}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#deletion_policy ChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.rowTimeToLive"></a>

```typescript
public readonly rowTimeToLive: string;
```

- *Type:* string

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#row_time_to_live ChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleDataTableRowTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#timeouts ChronicleDataTableRow#timeouts}

---

### ChronicleDataTableRowTimeouts <a name="ChronicleDataTableRowTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.Initializer"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

const chronicleDataTableRowTimeouts: chronicleDataTableRow.ChronicleDataTableRowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#create ChronicleDataTableRow#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#delete ChronicleDataTableRow#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#update ChronicleDataTableRow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#create ChronicleDataTableRow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#delete ChronicleDataTableRow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_data_table_row#update ChronicleDataTableRow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataTableRowTimeoutsOutputReference <a name="ChronicleDataTableRowTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleDataTableRow } from '@cdktn/provider-google'

new chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleDataTableRowTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---



