# `chronicleReferenceList` Submodule <a name="`chronicleReferenceList` Submodule" id="@cdktn/provider-google.chronicleReferenceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleReferenceList <a name="ChronicleReferenceList" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list google_chronicle_reference_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceList(scope: Construct, id: string, config: ChronicleReferenceListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig">ChronicleReferenceListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig">ChronicleReferenceListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putScopeInfo">putScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetScopeInfo">resetScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries"></a>

```typescript
public putEntries(value: IResolvable | ChronicleReferenceListEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]

---

##### `putScopeInfo` <a name="putScopeInfo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putScopeInfo"></a>

```typescript
public putScopeInfo(value: ChronicleReferenceListScopeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putScopeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleReferenceListTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetScopeInfo` <a name="resetScopeInfo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetScopeInfo"></a>

```typescript
public resetScopeInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleReferenceList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

chronicleReferenceList.ChronicleReferenceList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

chronicleReferenceList.ChronicleReferenceList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

chronicleReferenceList.ChronicleReferenceList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

chronicleReferenceList.ChronicleReferenceList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleReferenceList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleReferenceList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleReferenceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleReferenceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList">ChronicleReferenceListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.revisionCreateTime">revisionCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.ruleAssociationsCount">ruleAssociationsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference">ChronicleReferenceListScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference">ChronicleReferenceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entriesInput">entriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListIdInput">referenceListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfoInput">scopeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxTypeInput">syntaxTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListId">referenceListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxType">syntaxType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entries"></a>

```typescript
public readonly entries: ChronicleReferenceListEntriesList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList">ChronicleReferenceListEntriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `revisionCreateTime`<sup>Required</sup> <a name="revisionCreateTime" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.revisionCreateTime"></a>

```typescript
public readonly revisionCreateTime: string;
```

- *Type:* string

---

##### `ruleAssociationsCount`<sup>Required</sup> <a name="ruleAssociationsCount" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.ruleAssociationsCount"></a>

```typescript
public readonly ruleAssociationsCount: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `scopeInfo`<sup>Required</sup> <a name="scopeInfo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfo"></a>

```typescript
public readonly scopeInfo: ChronicleReferenceListScopeInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference">ChronicleReferenceListScopeInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleReferenceListTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference">ChronicleReferenceListTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | ChronicleReferenceListEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `referenceListIdInput`<sup>Optional</sup> <a name="referenceListIdInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListIdInput"></a>

```typescript
public readonly referenceListIdInput: string;
```

- *Type:* string

---

##### `scopeInfoInput`<sup>Optional</sup> <a name="scopeInfoInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfoInput"></a>

```typescript
public readonly scopeInfoInput: ChronicleReferenceListScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a>

---

##### `syntaxTypeInput`<sup>Optional</sup> <a name="syntaxTypeInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxTypeInput"></a>

```typescript
public readonly syntaxTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleReferenceListTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `referenceListId`<sup>Required</sup> <a name="referenceListId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListId"></a>

```typescript
public readonly referenceListId: string;
```

- *Type:* string

---

##### `syntaxType`<sup>Required</sup> <a name="syntaxType" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxType"></a>

```typescript
public readonly syntaxType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleReferenceListConfig <a name="ChronicleReferenceListConfig" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

const chronicleReferenceListConfig: chronicleReferenceList.ChronicleReferenceListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.description">description</a></code> | <code>string</code> | Required. A user-provided description of the reference list. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]</code> | entries block. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.referenceListId">referenceListId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.syntaxType">syntaxType</a></code> | <code>string</code> | Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#id ChronicleReferenceList#id}. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#project ChronicleReferenceList#project}. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Required. A user-provided description of the reference list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#description ChronicleReferenceList#description}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | ChronicleReferenceListEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#entries ChronicleReferenceList#entries}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#instance ChronicleReferenceList#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#location ChronicleReferenceList#location}

---

##### `referenceListId`<sup>Required</sup> <a name="referenceListId" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.referenceListId"></a>

```typescript
public readonly referenceListId: string;
```

- *Type:* string

Required.

The ID to use for the reference list. This is also the display name for
the reference list. It must satisfy the following requirements:
- Starts with letter.
- Contains only letters, numbers and underscore.
- Has length < 256.
- Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#reference_list_id ChronicleReferenceList#reference_list_id}

---

##### `syntaxType`<sup>Required</sup> <a name="syntaxType" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.syntaxType"></a>

```typescript
public readonly syntaxType: string;
```

- *Type:* string

Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#syntax_type ChronicleReferenceList#syntax_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#id ChronicleReferenceList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#project ChronicleReferenceList#project}.

---

##### `scopeInfo`<sup>Optional</sup> <a name="scopeInfo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.scopeInfo"></a>

```typescript
public readonly scopeInfo: ChronicleReferenceListScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#scope_info ChronicleReferenceList#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleReferenceListTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#timeouts ChronicleReferenceList#timeouts}

---

### ChronicleReferenceListEntries <a name="ChronicleReferenceListEntries" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

const chronicleReferenceListEntries: chronicleReferenceList.ChronicleReferenceListEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.property.value">value</a></code> | <code>string</code> | Required. The value of the entry. Maximum length is 512 characters. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Required. The value of the entry. Maximum length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#value ChronicleReferenceList#value}

---

### ChronicleReferenceListScopeInfo <a name="ChronicleReferenceListScopeInfo" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

const chronicleReferenceListScopeInfo: chronicleReferenceList.ChronicleReferenceListScopeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo.property.referenceListScope">referenceListScope</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a></code> | reference_list_scope block. |

---

##### `referenceListScope`<sup>Optional</sup> <a name="referenceListScope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo.property.referenceListScope"></a>

```typescript
public readonly referenceListScope: ChronicleReferenceListScopeInfoReferenceListScope;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a>

reference_list_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#reference_list_scope ChronicleReferenceList#reference_list_scope}

---

### ChronicleReferenceListScopeInfoReferenceListScope <a name="ChronicleReferenceListScopeInfoReferenceListScope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

const chronicleReferenceListScopeInfoReferenceListScope: chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope.property.scopeNames">scopeNames</a></code> | <code>string[]</code> | Optional. |

---

##### `scopeNames`<sup>Optional</sup> <a name="scopeNames" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope.property.scopeNames"></a>

```typescript
public readonly scopeNames: string[];
```

- *Type:* string[]

Optional.

The list of scope names of the reference list. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#scope_names ChronicleReferenceList#scope_names}

---

### ChronicleReferenceListTimeouts <a name="ChronicleReferenceListTimeouts" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

const chronicleReferenceListTimeouts: chronicleReferenceList.ChronicleReferenceListTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#create ChronicleReferenceList#create}. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#delete ChronicleReferenceList#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#update ChronicleReferenceList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#create ChronicleReferenceList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#delete ChronicleReferenceList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_reference_list#update ChronicleReferenceList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleReferenceListEntriesList <a name="ChronicleReferenceListEntriesList" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceListEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get"></a>

```typescript
public get(index: number): ChronicleReferenceListEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleReferenceListEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>[]

---


### ChronicleReferenceListEntriesOutputReference <a name="ChronicleReferenceListEntriesOutputReference" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceListEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleReferenceListEntries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListEntries">ChronicleReferenceListEntries</a>

---


### ChronicleReferenceListScopeInfoOutputReference <a name="ChronicleReferenceListScopeInfoOutputReference" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.putReferenceListScope">putReferenceListScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resetReferenceListScope">resetReferenceListScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferenceListScope` <a name="putReferenceListScope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.putReferenceListScope"></a>

```typescript
public putReferenceListScope(value: ChronicleReferenceListScopeInfoReferenceListScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.putReferenceListScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a>

---

##### `resetReferenceListScope` <a name="resetReferenceListScope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resetReferenceListScope"></a>

```typescript
public resetReferenceListScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScope">referenceListScope</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference">ChronicleReferenceListScopeInfoReferenceListScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScopeInput">referenceListScopeInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceListScope`<sup>Required</sup> <a name="referenceListScope" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScope"></a>

```typescript
public readonly referenceListScope: ChronicleReferenceListScopeInfoReferenceListScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference">ChronicleReferenceListScopeInfoReferenceListScopeOutputReference</a>

---

##### `referenceListScopeInput`<sup>Optional</sup> <a name="referenceListScopeInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScopeInput"></a>

```typescript
public readonly referenceListScopeInput: ChronicleReferenceListScopeInfoReferenceListScope;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleReferenceListScopeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a>

---


### ChronicleReferenceListScopeInfoReferenceListScopeOutputReference <a name="ChronicleReferenceListScopeInfoReferenceListScopeOutputReference" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resetScopeNames">resetScopeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopeNames` <a name="resetScopeNames" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resetScopeNames"></a>

```typescript
public resetScopeNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNamesInput">scopeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames">scopeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeNamesInput`<sup>Optional</sup> <a name="scopeNamesInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNamesInput"></a>

```typescript
public readonly scopeNamesInput: string[];
```

- *Type:* string[]

---

##### `scopeNames`<sup>Required</sup> <a name="scopeNames" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames"></a>

```typescript
public readonly scopeNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleReferenceListScopeInfoReferenceListScope;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a>

---


### ChronicleReferenceListTimeoutsOutputReference <a name="ChronicleReferenceListTimeoutsOutputReference" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleReferenceList } from '@cdktn/provider-google'

new chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleReferenceListTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

---



