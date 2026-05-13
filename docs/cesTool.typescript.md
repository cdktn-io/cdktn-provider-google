# `cesTool` Submodule <a name="`cesTool` Submodule" id="@cdktn/provider-google.cesTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesTool <a name="CesTool" id="@cdktn/provider-google.cesTool.CesTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool google_ces_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesTool.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesTool(scope: Construct, id: string, config: CesToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig">CesToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolConfig">CesToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putClientFunction">putClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putDataStoreTool">putDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool">putGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putPythonFunction">putPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetClientFunction">resetClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool">resetDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetExecutionType">resetExecutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool">resetGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetPythonFunction">resetPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesTool.CesTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesTool.CesTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesTool.CesTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesTool.CesTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesTool.CesTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesTool.CesTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesTool.CesTool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesTool.CesTool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesTool.CesTool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesTool.CesTool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesTool.CesTool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientFunction` <a name="putClientFunction" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction"></a>

```typescript
public putClientFunction(value: CesToolClientFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---

##### `putDataStoreTool` <a name="putDataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool"></a>

```typescript
public putDataStoreTool(value: CesToolDataStoreTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---

##### `putGoogleSearchTool` <a name="putGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool"></a>

```typescript
public putGoogleSearchTool(value: CesToolGoogleSearchTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---

##### `putPythonFunction` <a name="putPythonFunction" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction"></a>

```typescript
public putPythonFunction(value: CesToolPythonFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts"></a>

```typescript
public putTimeouts(value: CesToolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---

##### `resetClientFunction` <a name="resetClientFunction" id="@cdktn/provider-google.cesTool.CesTool.resetClientFunction"></a>

```typescript
public resetClientFunction(): void
```

##### `resetDataStoreTool` <a name="resetDataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool"></a>

```typescript
public resetDataStoreTool(): void
```

##### `resetExecutionType` <a name="resetExecutionType" id="@cdktn/provider-google.cesTool.CesTool.resetExecutionType"></a>

```typescript
public resetExecutionType(): void
```

##### `resetGoogleSearchTool` <a name="resetGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool"></a>

```typescript
public resetGoogleSearchTool(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesTool.CesTool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesTool.CesTool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPythonFunction` <a name="resetPythonFunction" id="@cdktn/provider-google.cesTool.CesTool.resetPythonFunction"></a>

```typescript
public resetPythonFunction(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesTool.CesTool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesTool.CesTool.isConstruct"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

cesTool.CesTool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

cesTool.CesTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

cesTool.CesTool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

cesTool.CesTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunction">clientFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool">dataStoreTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.generatedSummary">generatedSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool">googleSearchTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.openApiTool">openApiTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunction">pythonFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.systemTool">systemTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput">clientFunctionInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput">dataStoreToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput">executionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput">googleSearchToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput">pythonFunctionInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionType">executionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesTool.CesTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesTool.CesTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesTool.CesTool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesTool.CesTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesTool.CesTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesTool.CesTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesTool.CesTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesTool.CesTool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientFunction`<sup>Required</sup> <a name="clientFunction" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunction"></a>

```typescript
public readonly clientFunction: CesToolClientFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesTool.CesTool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataStoreTool`<sup>Required</sup> <a name="dataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool"></a>

```typescript
public readonly dataStoreTool: CesToolDataStoreToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesTool.CesTool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesTool.CesTool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `generatedSummary`<sup>Required</sup> <a name="generatedSummary" id="@cdktn/provider-google.cesTool.CesTool.property.generatedSummary"></a>

```typescript
public readonly generatedSummary: string;
```

- *Type:* string

---

##### `googleSearchTool`<sup>Required</sup> <a name="googleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool"></a>

```typescript
public readonly googleSearchTool: CesToolGoogleSearchToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiTool`<sup>Required</sup> <a name="openApiTool" id="@cdktn/provider-google.cesTool.CesTool.property.openApiTool"></a>

```typescript
public readonly openApiTool: CesToolOpenApiToolList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a>

---

##### `pythonFunction`<sup>Required</sup> <a name="pythonFunction" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunction"></a>

```typescript
public readonly pythonFunction: CesToolPythonFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a>

---

##### `systemTool`<sup>Required</sup> <a name="systemTool" id="@cdktn/provider-google.cesTool.CesTool.property.systemTool"></a>

```typescript
public readonly systemTool: CesToolSystemToolList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesTool.CesTool.property.timeouts"></a>

```typescript
public readonly timeouts: CesToolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesTool.CesTool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesTool.CesTool.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `clientFunctionInput`<sup>Optional</sup> <a name="clientFunctionInput" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput"></a>

```typescript
public readonly clientFunctionInput: CesToolClientFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---

##### `dataStoreToolInput`<sup>Optional</sup> <a name="dataStoreToolInput" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput"></a>

```typescript
public readonly dataStoreToolInput: CesToolDataStoreTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---

##### `executionTypeInput`<sup>Optional</sup> <a name="executionTypeInput" id="@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput"></a>

```typescript
public readonly executionTypeInput: string;
```

- *Type:* string

---

##### `googleSearchToolInput`<sup>Optional</sup> <a name="googleSearchToolInput" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput"></a>

```typescript
public readonly googleSearchToolInput: CesToolGoogleSearchTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesTool.CesTool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesTool.CesTool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesTool.CesTool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pythonFunctionInput`<sup>Optional</sup> <a name="pythonFunctionInput" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput"></a>

```typescript
public readonly pythonFunctionInput: CesToolPythonFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CesToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google.cesTool.CesTool.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesTool.CesTool.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="@cdktn/provider-google.cesTool.CesTool.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesTool.CesTool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesTool.CesTool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.cesTool.CesTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesTool.CesTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesToolClientFunction <a name="CesToolClientFunction" id="@cdktn/provider-google.cesTool.CesToolClientFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunction.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolClientFunction: cesTool.CesToolClientFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.name">name</a></code> | <code>string</code> | The function name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.description">description</a></code> | <code>string</code> | The function description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.response">response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | response block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#name CesTool#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#description CesTool#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters"></a>

```typescript
public readonly parameters: CesToolClientFunctionParameters;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#parameters CesTool#parameters}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.response"></a>

```typescript
public readonly response: CesToolClientFunctionResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#response CesTool#response}

---

### CesToolClientFunctionParameters <a name="CesToolClientFunctionParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolClientFunctionParameters: cesTool.CesToolClientFunctionParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type">type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf">anyOf</a></code> | <code>string</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default">default</a></code> | <code>string</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs">defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description">description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum">enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items">items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum">maximum</a></code> | <code>number</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems">maxItems</a></code> | <code>number</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum">minimum</a></code> | <code>number</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems">minItems</a></code> | <code>number</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems">prefixItems</a></code> | <code>string</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties">properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref">ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required">required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title">title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#type CesTool#type}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#default CesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#description CesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:
1. We can define direction as :
{type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
{type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#items CesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `minItems`<sup>Optional</sup> <a name="minItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `prefixItems`<sup>Optional</sup> <a name="prefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
  pet:
    ref: #/defs/Pet
defs:
  Pet:
    type: object
    properties:
      name:
        type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#required CesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#title CesTool#title}

---

##### `uniqueItems`<sup>Optional</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolClientFunctionResponse <a name="CesToolClientFunctionResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolClientFunctionResponse: cesTool.CesToolClientFunctionResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type">type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf">anyOf</a></code> | <code>string</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default">default</a></code> | <code>string</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs">defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description">description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum">enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items">items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum">maximum</a></code> | <code>number</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems">maxItems</a></code> | <code>number</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum">minimum</a></code> | <code>number</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems">minItems</a></code> | <code>number</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems">prefixItems</a></code> | <code>string</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties">properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref">ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required">required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title">title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#type CesTool#type}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#default CesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#description CesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:
1. We can define direction as :
{type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
{type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#items CesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `minItems`<sup>Optional</sup> <a name="minItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `prefixItems`<sup>Optional</sup> <a name="prefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
  pet:
    ref: #/defs/Pet
defs:
  Pet:
    type: object
    properties:
      name:
        type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#required CesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#title CesTool#title}

---

##### `uniqueItems`<sup>Optional</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolConfig <a name="CesToolConfig" id="@cdktn/provider-google.cesTool.CesToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolConfig: cesTool.CesToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.toolId">toolId</a></code> | <code>string</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction">clientFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool">dataStoreTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.executionType">executionType</a></code> | <code>string</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool">googleSearchTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#id CesTool#id}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#project CesTool#project}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction">pythonFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesTool.CesToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesTool.CesToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesTool.CesToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesTool.CesToolConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#app CesTool#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesTool.CesToolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#location CesTool#location}

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.cesTool.CesToolConfig.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#tool_id CesTool#tool_id}

---

##### `clientFunction`<sup>Optional</sup> <a name="clientFunction" id="@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction"></a>

```typescript
public readonly clientFunction: CesToolClientFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#client_function CesTool#client_function}

---

##### `dataStoreTool`<sup>Optional</sup> <a name="dataStoreTool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool"></a>

```typescript
public readonly dataStoreTool: CesToolDataStoreTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#data_store_tool CesTool#data_store_tool}

---

##### `executionType`<sup>Optional</sup> <a name="executionType" id="@cdktn/provider-google.cesTool.CesToolConfig.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#execution_type CesTool#execution_type}

---

##### `googleSearchTool`<sup>Optional</sup> <a name="googleSearchTool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool"></a>

```typescript
public readonly googleSearchTool: CesToolGoogleSearchTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#google_search_tool CesTool#google_search_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesTool.CesToolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#id CesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesTool.CesToolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#project CesTool#project}.

---

##### `pythonFunction`<sup>Optional</sup> <a name="pythonFunction" id="@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction"></a>

```typescript
public readonly pythonFunction: CesToolPythonFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#python_function CesTool#python_function}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CesToolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#timeouts CesTool#timeouts}

---

### CesToolDataStoreTool <a name="CesToolDataStoreTool" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreTool: cesTool.CesToolDataStoreTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name">name</a></code> | <code>string</code> | The data store tool name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs">boostSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | boost_specs block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description">description</a></code> | <code>string</code> | The tool description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource">engineSource</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | engine_source block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults">maxResults</a></code> | <code>number</code> | Number of search results to return per query. The default value is 10. The maximum allowed value is 10. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs">modalityConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | modality_configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#name CesTool#name}

---

##### `boostSpecs`<sup>Optional</sup> <a name="boostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs"></a>

```typescript
public readonly boostSpecs: IResolvable | CesToolDataStoreToolBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#boost_specs CesTool#boost_specs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#description CesTool#description}

---

##### `engineSource`<sup>Optional</sup> <a name="engineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource"></a>

```typescript
public readonly engineSource: CesToolDataStoreToolEngineSource;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#engine_source CesTool#engine_source}

---

##### `maxResults`<sup>Optional</sup> <a name="maxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#max_results CesTool#max_results}

---

##### `modalityConfigs`<sup>Optional</sup> <a name="modalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs"></a>

```typescript
public readonly modalityConfigs: IResolvable | CesToolDataStoreToolModalityConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#modality_configs CesTool#modality_configs}

---

### CesToolDataStoreToolBoostSpecs <a name="CesToolDataStoreToolBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolBoostSpecs: cesTool.CesToolDataStoreToolBoostSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores">dataStores</a></code> | <code>string[]</code> | The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec">spec</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | spec block. |

---

##### `dataStores`<sup>Required</sup> <a name="dataStores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores"></a>

```typescript
public readonly dataStores: string[];
```

- *Type:* string[]

The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#data_stores CesTool#data_stores}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec"></a>

```typescript
public readonly spec: IResolvable | CesToolDataStoreToolBoostSpecsSpec[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#spec CesTool#spec}

---

### CesToolDataStoreToolBoostSpecsSpec <a name="CesToolDataStoreToolBoostSpecsSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolBoostSpecsSpec: cesTool.CesToolDataStoreToolBoostSpecsSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs">conditionBoostSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | condition_boost_specs block. |

---

##### `conditionBoostSpecs`<sup>Required</sup> <a name="conditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs"></a>

```typescript
public readonly conditionBoostSpecs: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

condition_boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#condition_boost_specs CesTool#condition_boost_specs}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs: cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition">condition</a></code> | <code>string</code> | An expression which specifies a boost condition. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost">boost</a></code> | <code>number</code> | Strength of the boost, which should be in [-1, 1]. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec">boostControlSpec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | boost_control_spec block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

An expression which specifies a boost condition.

The syntax is the same
as filter expression syntax. Currently, the only supported condition is
a list of BCP-47 lang codes.
Example: To boost suggestions in languages en or fr:
(lang_code: ANY("en", "fr"))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#condition CesTool#condition}

---

##### `boost`<sup>Optional</sup> <a name="boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost"></a>

```typescript
public readonly boost: number;
```

- *Type:* number

Strength of the boost, which should be in [-1, 1].

Negative boost means
demotion. Default is 0.0.
Setting to 1.0 gives the suggestions a big promotion. However, it does
not necessarily mean that the top result will be a boosted suggestion.
Setting to -1.0 gives the suggestions a big demotion. However, other
suggestions that are relevant might still be shown.
Setting to 0.0 means no boost applied. The boosting condition is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#boost CesTool#boost}

---

##### `boostControlSpec`<sup>Optional</sup> <a name="boostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec"></a>

```typescript
public readonly boostControlSpec: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

boost_control_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#boost_control_spec CesTool#boost_control_spec}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec: cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType">attributeType</a></code> | <code>string</code> | The attribute type to be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints">controlPoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | control_points block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType">interpolationType</a></code> | <code>string</code> | The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR. |

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#attribute_type CesTool#attribute_type}

---

##### `controlPoints`<sup>Optional</sup> <a name="controlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints"></a>

```typescript
public readonly controlPoints: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#control_points CesTool#control_points}

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#field_name CesTool#field_name}

---

##### `interpolationType`<sup>Optional</sup> <a name="interpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType"></a>

```typescript
public readonly interpolationType: string;
```

- *Type:* string

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#interpolation_type CesTool#interpolation_type}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints: cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue">attributeValue</a></code> | <code>string</code> | Can be one of: 1. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount">boostAmount</a></code> | <code>number</code> | The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. |

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Can be one of: 1.

The numerical field value.
2. The duration spec for freshness:
The value must be formatted as an XSD 'dayTimeDuration' value (a
restricted subset of an ISO 8601 duration value). The pattern for
this is: 'nDnM]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#attribute_value CesTool#attribute_value}

---

##### `boostAmount`<sup>Optional</sup> <a name="boostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount"></a>

```typescript
public readonly boostAmount: number;
```

- *Type:* number

The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#boost_amount CesTool#boost_amount}

---

### CesToolDataStoreToolEngineSource <a name="CesToolDataStoreToolEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolEngineSource: cesTool.CesToolDataStoreToolEngineSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine">engine</a></code> | <code>string</code> | Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources">dataStoreSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | data_store_sources block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter">filter</a></code> | <code>string</code> | A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#engine CesTool#engine}

---

##### `dataStoreSources`<sup>Optional</sup> <a name="dataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources"></a>

```typescript
public readonly dataStoreSources: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#data_store_sources CesTool#data_store_sources}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSources <a name="CesToolDataStoreToolEngineSourceDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolEngineSourceDataStoreSources: cesTool.CesToolDataStoreToolEngineSourceDataStoreSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore">dataStore</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter">filter</a></code> | <code>string</code> | Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore"></a>

```typescript
public readonly dataStore: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#data_store CesTool#data_store}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolEngineSourceDataStoreSourcesDataStore: cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name">name</a></code> | <code>string</code> | Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#name CesTool#name}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig: cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig = { ... }
```


### CesToolDataStoreToolModalityConfigs <a name="CesToolDataStoreToolModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigs: cesTool.CesToolDataStoreToolModalityConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType">modalityType</a></code> | <code>string</code> | The modality type. Possible values: TEXT AUDIO. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig">groundingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | grounding_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig">rewriterConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | rewriter_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | summarization_config block. |

---

##### `modalityType`<sup>Required</sup> <a name="modalityType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType"></a>

```typescript
public readonly modalityType: string;
```

- *Type:* string

The modality type. Possible values: TEXT AUDIO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#modality_type CesTool#modality_type}

---

##### `groundingConfig`<sup>Optional</sup> <a name="groundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig"></a>

```typescript
public readonly groundingConfig: CesToolDataStoreToolModalityConfigsGroundingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

grounding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#grounding_config CesTool#grounding_config}

---

##### `rewriterConfig`<sup>Optional</sup> <a name="rewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig"></a>

```typescript
public readonly rewriterConfig: CesToolDataStoreToolModalityConfigsRewriterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

rewriter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#rewriter_config CesTool#rewriter_config}

---

##### `summarizationConfig`<sup>Optional</sup> <a name="summarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: CesToolDataStoreToolModalityConfigsSummarizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#summarization_config CesTool#summarization_config}

---

### CesToolDataStoreToolModalityConfigsGroundingConfig <a name="CesToolDataStoreToolModalityConfigsGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigsGroundingConfig: cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether grounding is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel">groundingLevel</a></code> | <code>number</code> | The groundedness threshold of the answer based on the retrieved sources. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `groundingLevel`<sup>Optional</sup> <a name="groundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel"></a>

```typescript
public readonly groundingLevel: number;
```

- *Type:* number

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#grounding_level CesTool#grounding_level}

---

### CesToolDataStoreToolModalityConfigsRewriterConfig <a name="CesToolDataStoreToolModalityConfigsRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigsRewriterConfig: cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rewriter is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt">prompt</a></code> | <code>string</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigsRewriterConfigModelSettings: cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#model CesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfig <a name="CesToolDataStoreToolModalityConfigsSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigsSummarizationConfig: cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether summarization is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt">prompt</a></code> | <code>string</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings: cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#model CesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolGoogleSearchTool <a name="CesToolGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolGoogleSearchTool: cesTool.CesToolGoogleSearchTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name">name</a></code> | <code>string</code> | The name of the tool. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls">contextUrls</a></code> | <code>string[]</code> | Content will be fetched directly from these URLs for context and grounding. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description">description</a></code> | <code>string</code> | Description of the tool's purpose. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains">excludeDomains</a></code> | <code>string[]</code> | List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains">preferredDomains</a></code> | <code>string[]</code> | Specifies domain names to guide the search. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#name CesTool#name}

---

##### `contextUrls`<sup>Optional</sup> <a name="contextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls"></a>

```typescript
public readonly contextUrls: string[];
```

- *Type:* string[]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#context_urls CesTool#context_urls}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#description CesTool#description}

---

##### `excludeDomains`<sup>Optional</sup> <a name="excludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains"></a>

```typescript
public readonly excludeDomains: string[];
```

- *Type:* string[]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#exclude_domains CesTool#exclude_domains}

---

##### `preferredDomains`<sup>Optional</sup> <a name="preferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains"></a>

```typescript
public readonly preferredDomains: string[];
```

- *Type:* string[]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#preferred_domains CesTool#preferred_domains}

---

### CesToolOpenApiTool <a name="CesToolOpenApiTool" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiTool: cesTool.CesToolOpenApiTool = { ... }
```


### CesToolOpenApiToolApiAuthentication <a name="CesToolOpenApiToolApiAuthentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthentication: cesTool.CesToolOpenApiToolApiAuthentication = { ... }
```


### CesToolOpenApiToolApiAuthenticationApiKeyConfig <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthenticationApiKeyConfig: cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig = { ... }
```


### CesToolOpenApiToolApiAuthenticationBearerTokenConfig <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthenticationBearerTokenConfig: cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig = { ... }
```


### CesToolOpenApiToolApiAuthenticationOauthConfig <a name="CesToolOpenApiToolApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthenticationOauthConfig: cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig = { ... }
```


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig: cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig = { ... }
```


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig: cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig = { ... }
```


### CesToolOpenApiToolServiceDirectoryConfig <a name="CesToolOpenApiToolServiceDirectoryConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolServiceDirectoryConfig: cesTool.CesToolOpenApiToolServiceDirectoryConfig = { ... }
```


### CesToolOpenApiToolTlsConfig <a name="CesToolOpenApiToolTlsConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolTlsConfig: cesTool.CesToolOpenApiToolTlsConfig = { ... }
```


### CesToolOpenApiToolTlsConfigCaCerts <a name="CesToolOpenApiToolTlsConfigCaCerts" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolOpenApiToolTlsConfigCaCerts: cesTool.CesToolOpenApiToolTlsConfigCaCerts = { ... }
```


### CesToolPythonFunction <a name="CesToolPythonFunction" id="@cdktn/provider-google.cesTool.CesToolPythonFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolPythonFunction: cesTool.CesToolPythonFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name">name</a></code> | <code>string</code> | The name of the Python function to execute. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode">pythonCode</a></code> | <code>string</code> | The Python code to execute for the tool. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#name CesTool#name}

---

##### `pythonCode`<sup>Optional</sup> <a name="pythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#python_code CesTool#python_code}

---

### CesToolSystemTool <a name="CesToolSystemTool" id="@cdktn/provider-google.cesTool.CesToolSystemTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolSystemTool.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolSystemTool: cesTool.CesToolSystemTool = { ... }
```


### CesToolTimeouts <a name="CesToolTimeouts" id="@cdktn/provider-google.cesTool.CesToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolTimeouts.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

const cesToolTimeouts: cesTool.CesToolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#create CesTool#create}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#delete CesTool#delete}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#update CesTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#create CesTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#delete CesTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/ces_tool#update CesTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesToolClientFunctionOutputReference <a name="CesToolClientFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolClientFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters"></a>

```typescript
public putParameters(value: CesToolClientFunctionParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---

##### `putResponse` <a name="putResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse"></a>

```typescript
public putResponse(value: CesToolClientFunctionResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput">responseInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: CesToolClientFunctionParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response"></a>

```typescript
public readonly response: CesToolClientFunctionResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: CesToolClientFunctionParameters;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: CesToolClientFunctionResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolClientFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---


### CesToolClientFunctionParametersOutputReference <a name="CesToolClientFunctionParametersOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolClientFunctionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs">resetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems">resetMinItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems">resetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems">resetUniqueItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf"></a>

```typescript
public resetAnyOf(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDefs` <a name="resetDefs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs"></a>

```typescript
public resetDefs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinItems` <a name="resetMinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems"></a>

```typescript
public resetMinItems(): void
```

##### `resetNullable` <a name="resetNullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable"></a>

```typescript
public resetNullable(): void
```

##### `resetPrefixItems` <a name="resetPrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems"></a>

```typescript
public resetPrefixItems(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUniqueItems` <a name="resetUniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems"></a>

```typescript
public resetUniqueItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput">defsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput">itemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput">minItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput">nullableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput">prefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput">uniqueItemsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf">anyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs">defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items">items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems">minItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems">prefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required">required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string;
```

- *Type:* string

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput"></a>

```typescript
public readonly anyOfInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `defsInput`<sup>Optional</sup> <a name="defsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput"></a>

```typescript
public readonly defsInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `minItemsInput`<sup>Optional</sup> <a name="minItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput"></a>

```typescript
public readonly minItemsInput: number;
```

- *Type:* number

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput"></a>

```typescript
public readonly nullableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItemsInput`<sup>Optional</sup> <a name="prefixItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput"></a>

```typescript
public readonly prefixItemsInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: string[];
```

- *Type:* string[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uniqueItemsInput`<sup>Optional</sup> <a name="uniqueItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput"></a>

```typescript
public readonly uniqueItemsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `minItems`<sup>Required</sup> <a name="minItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItems`<sup>Required</sup> <a name="prefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueItems`<sup>Required</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolClientFunctionParameters;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---


### CesToolClientFunctionResponseOutputReference <a name="CesToolClientFunctionResponseOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolClientFunctionResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs">resetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems">resetMinItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems">resetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems">resetUniqueItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf"></a>

```typescript
public resetAnyOf(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDefs` <a name="resetDefs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs"></a>

```typescript
public resetDefs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinItems` <a name="resetMinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems"></a>

```typescript
public resetMinItems(): void
```

##### `resetNullable` <a name="resetNullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable"></a>

```typescript
public resetNullable(): void
```

##### `resetPrefixItems` <a name="resetPrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems"></a>

```typescript
public resetPrefixItems(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUniqueItems` <a name="resetUniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems"></a>

```typescript
public resetUniqueItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput">defsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput">itemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput">minItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput">nullableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput">prefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput">requiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput">uniqueItemsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf">anyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs">defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items">items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems">minItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems">prefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required">required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string;
```

- *Type:* string

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput"></a>

```typescript
public readonly anyOfInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `defsInput`<sup>Optional</sup> <a name="defsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput"></a>

```typescript
public readonly defsInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `minItemsInput`<sup>Optional</sup> <a name="minItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput"></a>

```typescript
public readonly minItemsInput: number;
```

- *Type:* number

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput"></a>

```typescript
public readonly nullableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItemsInput`<sup>Optional</sup> <a name="prefixItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput"></a>

```typescript
public readonly prefixItemsInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: string[];
```

- *Type:* string[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uniqueItemsInput`<sup>Optional</sup> <a name="uniqueItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput"></a>

```typescript
public readonly uniqueItemsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `minItems`<sup>Required</sup> <a name="minItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItems`<sup>Required</sup> <a name="prefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueItems`<sup>Required</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolClientFunctionResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---


### CesToolDataStoreToolBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---


### CesToolDataStoreToolBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec">putSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpec` <a name="putSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec"></a>

```typescript
public putSpec(value: IResolvable | CesToolDataStoreToolBoostSpecsSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput">dataStoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores">dataStores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec"></a>

```typescript
public readonly spec: CesToolDataStoreToolBoostSpecsSpecList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a>

---

##### `dataStoresInput`<sup>Optional</sup> <a name="dataStoresInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput"></a>

```typescript
public readonly dataStoresInput: string[];
```

- *Type:* string[]

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | CesToolDataStoreToolBoostSpecsSpec[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---

##### `dataStores`<sup>Required</sup> <a name="dataStores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores"></a>

```typescript
public readonly dataStores: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount">resetBoostAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue"></a>

```typescript
public resetAttributeValue(): void
```

##### `resetBoostAmount` <a name="resetBoostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount"></a>

```typescript
public resetBoostAmount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput">boostAmountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount">boostAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `boostAmountInput`<sup>Optional</sup> <a name="boostAmountInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput"></a>

```typescript
public readonly boostAmountInput: number;
```

- *Type:* number

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `boostAmount`<sup>Required</sup> <a name="boostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount"></a>

```typescript
public readonly boostAmount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints">putControlPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints">resetControlPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType">resetInterpolationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPoints` <a name="putControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints"></a>

```typescript
public putControlPoints(value: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType"></a>

```typescript
public resetAttributeType(): void
```

##### `resetControlPoints` <a name="resetControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints"></a>

```typescript
public resetControlPoints(): void
```

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetInterpolationType` <a name="resetInterpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType"></a>

```typescript
public resetInterpolationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints">controlPoints</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput">controlPointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput">interpolationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType">attributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType">interpolationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPoints`<sup>Required</sup> <a name="controlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints"></a>

```typescript
public readonly controlPoints: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a>

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput"></a>

```typescript
public readonly attributeTypeInput: string;
```

- *Type:* string

---

##### `controlPointsInput`<sup>Optional</sup> <a name="controlPointsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput"></a>

```typescript
public readonly controlPointsInput: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `interpolationTypeInput`<sup>Optional</sup> <a name="interpolationTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput"></a>

```typescript
public readonly interpolationTypeInput: string;
```

- *Type:* string

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `interpolationType`<sup>Required</sup> <a name="interpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType"></a>

```typescript
public readonly interpolationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec">putBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost">resetBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec">resetBoostControlSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoostControlSpec` <a name="putBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec"></a>

```typescript
public putBoostControlSpec(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `resetBoost` <a name="resetBoost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost"></a>

```typescript
public resetBoost(): void
```

##### `resetBoostControlSpec` <a name="resetBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec"></a>

```typescript
public resetBoostControlSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec">boostControlSpec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput">boostControlSpecInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput">boostInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost">boost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boostControlSpec`<sup>Required</sup> <a name="boostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec"></a>

```typescript
public readonly boostControlSpec: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a>

---

##### `boostControlSpecInput`<sup>Optional</sup> <a name="boostControlSpecInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput"></a>

```typescript
public readonly boostControlSpecInput: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `boostInput`<sup>Optional</sup> <a name="boostInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput"></a>

```typescript
public readonly boostInput: number;
```

- *Type:* number

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `boost`<sup>Required</sup> <a name="boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost"></a>

```typescript
public readonly boost: number;
```

- *Type:* number

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecList <a name="CesToolDataStoreToolBoostSpecsSpecList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolBoostSpecsSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpec[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs">putConditionBoostSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionBoostSpecs` <a name="putConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs"></a>

```typescript
public putConditionBoostSpecs(value: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs">conditionBoostSpecs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput">conditionBoostSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionBoostSpecs`<sup>Required</sup> <a name="conditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs"></a>

```typescript
public readonly conditionBoostSpecs: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a>

---

##### `conditionBoostSpecsInput`<sup>Optional</sup> <a name="conditionBoostSpecsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput"></a>

```typescript
public readonly conditionBoostSpecsInput: IResolvable | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolBoostSpecsSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName">collectionDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName"></a>

```typescript
public readonly collectionDisplayName: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig">connectorConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode">documentProcessingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorConfig`<sup>Required</sup> <a name="connectorConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig"></a>

```typescript
public readonly connectorConfig: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentProcessingMode`<sup>Required</sup> <a name="documentProcessingMode" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode"></a>

```typescript
public readonly documentProcessingMode: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore">putDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStore` <a name="putDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore"></a>

```typescript
public putDataStore(value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `resetDataStore` <a name="resetDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore"></a>

```typescript
public resetDataStore(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore">dataStore</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>

---


### CesToolDataStoreToolEngineSourceOutputReference <a name="CesToolDataStoreToolEngineSourceOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolEngineSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources">putDataStoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources">resetDataStoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreSources` <a name="putDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources"></a>

```typescript
public putDataStoreSources(value: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---

##### `resetDataStoreSources` <a name="resetDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources"></a>

```typescript
public resetDataStoreSources(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources">dataStoreSources</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput">dataStoreSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreSources`<sup>Required</sup> <a name="dataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources"></a>

```typescript
public readonly dataStoreSources: CesToolDataStoreToolEngineSourceDataStoreSourcesList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a>

---

##### `dataStoreSourcesInput`<sup>Optional</sup> <a name="dataStoreSourcesInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput"></a>

```typescript
public readonly dataStoreSourcesInput: IResolvable | CesToolDataStoreToolEngineSourceDataStoreSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolEngineSource;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---


### CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel">resetGroundingLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetGroundingLevel` <a name="resetGroundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel"></a>

```typescript
public resetGroundingLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput">groundingLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel">groundingLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groundingLevelInput`<sup>Optional</sup> <a name="groundingLevelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput"></a>

```typescript
public readonly groundingLevelInput: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groundingLevel`<sup>Required</sup> <a name="groundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel"></a>

```typescript
public readonly groundingLevel: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolModalityConfigsGroundingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---


### CesToolDataStoreToolModalityConfigsList <a name="CesToolDataStoreToolModalityConfigsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get"></a>

```typescript
public get(index: number): CesToolDataStoreToolModalityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolModalityConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---


### CesToolDataStoreToolModalityConfigsOutputReference <a name="CesToolDataStoreToolModalityConfigsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig">putGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig">putRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig">putSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig">resetGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig">resetRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig">resetSummarizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroundingConfig` <a name="putGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig"></a>

```typescript
public putGroundingConfig(value: CesToolDataStoreToolModalityConfigsGroundingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `putRewriterConfig` <a name="putRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig"></a>

```typescript
public putRewriterConfig(value: CesToolDataStoreToolModalityConfigsRewriterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `putSummarizationConfig` <a name="putSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig"></a>

```typescript
public putSummarizationConfig(value: CesToolDataStoreToolModalityConfigsSummarizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `resetGroundingConfig` <a name="resetGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig"></a>

```typescript
public resetGroundingConfig(): void
```

##### `resetRewriterConfig` <a name="resetRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig"></a>

```typescript
public resetRewriterConfig(): void
```

##### `resetSummarizationConfig` <a name="resetSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig"></a>

```typescript
public resetSummarizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig">groundingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig">rewriterConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput">groundingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput">modalityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput">rewriterConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput">summarizationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType">modalityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groundingConfig`<sup>Required</sup> <a name="groundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig"></a>

```typescript
public readonly groundingConfig: CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a>

---

##### `rewriterConfig`<sup>Required</sup> <a name="rewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig"></a>

```typescript
public readonly rewriterConfig: CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a>

---

##### `summarizationConfig`<sup>Required</sup> <a name="summarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a>

---

##### `groundingConfigInput`<sup>Optional</sup> <a name="groundingConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput"></a>

```typescript
public readonly groundingConfigInput: CesToolDataStoreToolModalityConfigsGroundingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `modalityTypeInput`<sup>Optional</sup> <a name="modalityTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput"></a>

```typescript
public readonly modalityTypeInput: string;
```

- *Type:* string

---

##### `rewriterConfigInput`<sup>Optional</sup> <a name="rewriterConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput"></a>

```typescript
public readonly rewriterConfigInput: CesToolDataStoreToolModalityConfigsRewriterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `summarizationConfigInput`<sup>Optional</sup> <a name="summarizationConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput"></a>

```typescript
public readonly summarizationConfigInput: CesToolDataStoreToolModalityConfigsSummarizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `modalityType`<sup>Required</sup> <a name="modalityType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType"></a>

```typescript
public readonly modalityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolDataStoreToolModalityConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt">resetPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings"></a>

```typescript
public putModelSettings(value: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetPrompt` <a name="resetPrompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt"></a>

```typescript
public resetPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput">promptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolModalityConfigsRewriterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt">resetPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings"></a>

```typescript
public putModelSettings(value: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```

##### `resetPrompt` <a name="resetPrompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt"></a>

```typescript
public resetPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput">promptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreToolModalityConfigsSummarizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---


### CesToolDataStoreToolOutputReference <a name="CesToolDataStoreToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolDataStoreToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs">putBoostSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource">putEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs">putModalityConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs">resetBoostSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource">resetEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults">resetMaxResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs">resetModalityConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoostSpecs` <a name="putBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs"></a>

```typescript
public putBoostSpecs(value: IResolvable | CesToolDataStoreToolBoostSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---

##### `putEngineSource` <a name="putEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource"></a>

```typescript
public putEngineSource(value: CesToolDataStoreToolEngineSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---

##### `putModalityConfigs` <a name="putModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs"></a>

```typescript
public putModalityConfigs(value: IResolvable | CesToolDataStoreToolModalityConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---

##### `resetBoostSpecs` <a name="resetBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs"></a>

```typescript
public resetBoostSpecs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngineSource` <a name="resetEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource"></a>

```typescript
public resetEngineSource(): void
```

##### `resetMaxResults` <a name="resetMaxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults"></a>

```typescript
public resetMaxResults(): void
```

##### `resetModalityConfigs` <a name="resetModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs"></a>

```typescript
public resetModalityConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs">boostSpecs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource">engineSource</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs">modalityConfigs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput">boostSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput">engineSourceInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput">maxResultsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput">modalityConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults">maxResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boostSpecs`<sup>Required</sup> <a name="boostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs"></a>

```typescript
public readonly boostSpecs: CesToolDataStoreToolBoostSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a>

---

##### `engineSource`<sup>Required</sup> <a name="engineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource"></a>

```typescript
public readonly engineSource: CesToolDataStoreToolEngineSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a>

---

##### `modalityConfigs`<sup>Required</sup> <a name="modalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs"></a>

```typescript
public readonly modalityConfigs: CesToolDataStoreToolModalityConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a>

---

##### `boostSpecsInput`<sup>Optional</sup> <a name="boostSpecsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput"></a>

```typescript
public readonly boostSpecsInput: IResolvable | CesToolDataStoreToolBoostSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineSourceInput`<sup>Optional</sup> <a name="engineSourceInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput"></a>

```typescript
public readonly engineSourceInput: CesToolDataStoreToolEngineSource;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---

##### `maxResultsInput`<sup>Optional</sup> <a name="maxResultsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput"></a>

```typescript
public readonly maxResultsInput: number;
```

- *Type:* number

---

##### `modalityConfigsInput`<sup>Optional</sup> <a name="modalityConfigsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput"></a>

```typescript
public readonly modalityConfigsInput: IResolvable | CesToolDataStoreToolModalityConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `maxResults`<sup>Required</sup> <a name="maxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolDataStoreTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---


### CesToolGoogleSearchToolOutputReference <a name="CesToolGoogleSearchToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolGoogleSearchToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls">resetContextUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains">resetExcludeDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains">resetPreferredDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextUrls` <a name="resetContextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls"></a>

```typescript
public resetContextUrls(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludeDomains` <a name="resetExcludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains"></a>

```typescript
public resetExcludeDomains(): void
```

##### `resetPreferredDomains` <a name="resetPreferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains"></a>

```typescript
public resetPreferredDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput">contextUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput">excludeDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput">preferredDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls">contextUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains">excludeDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains">preferredDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextUrlsInput`<sup>Optional</sup> <a name="contextUrlsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput"></a>

```typescript
public readonly contextUrlsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludeDomainsInput`<sup>Optional</sup> <a name="excludeDomainsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput"></a>

```typescript
public readonly excludeDomainsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preferredDomainsInput`<sup>Optional</sup> <a name="preferredDomainsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput"></a>

```typescript
public readonly preferredDomainsInput: string[];
```

- *Type:* string[]

---

##### `contextUrls`<sup>Required</sup> <a name="contextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls"></a>

```typescript
public readonly contextUrls: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludeDomains`<sup>Required</sup> <a name="excludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains"></a>

```typescript
public readonly excludeDomains: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredDomains`<sup>Required</sup> <a name="preferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains"></a>

```typescript
public readonly preferredDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolGoogleSearchTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigList <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a>

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigList <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a>

---


### CesToolOpenApiToolApiAuthenticationList <a name="CesToolOpenApiToolApiAuthenticationList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationOauthConfigList <a name="CesToolOpenApiToolApiAuthenticationOauthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationOutputReference <a name="CesToolOpenApiToolApiAuthenticationOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: CesToolOpenApiToolApiAuthenticationApiKeyConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: CesToolOpenApiToolApiAuthenticationBearerTokenConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: CesToolOpenApiToolApiAuthenticationOauthConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a>

---

##### `serviceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfig: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolOpenApiToolList <a name="CesToolOpenApiToolList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolOutputReference <a name="CesToolOpenApiToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields">ignoreUnknownFields</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema">openApiSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: CesToolOpenApiToolApiAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ignoreUnknownFields`<sup>Required</sup> <a name="ignoreUnknownFields" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields"></a>

```typescript
public readonly ignoreUnknownFields: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiSchema`<sup>Required</sup> <a name="openApiSchema" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema"></a>

```typescript
public readonly openApiSchema: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: CesToolOpenApiToolServiceDirectoryConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: CesToolOpenApiToolTlsConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a>

---


### CesToolOpenApiToolServiceDirectoryConfigList <a name="CesToolOpenApiToolServiceDirectoryConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolServiceDirectoryConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolServiceDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolServiceDirectoryConfigOutputReference <a name="CesToolOpenApiToolServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a>

---


### CesToolOpenApiToolTlsConfigCaCertsList <a name="CesToolOpenApiToolTlsConfigCaCertsList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolTlsConfigCaCertsOutputReference <a name="CesToolOpenApiToolTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolTlsConfigCaCerts;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a>

---


### CesToolOpenApiToolTlsConfigList <a name="CesToolOpenApiToolTlsConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolTlsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get"></a>

```typescript
public get(index: number): CesToolOpenApiToolTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolOpenApiToolTlsConfigOutputReference <a name="CesToolOpenApiToolTlsConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolOpenApiToolTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: CesToolOpenApiToolTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolOpenApiToolTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a>

---


### CesToolPythonFunctionOutputReference <a name="CesToolPythonFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolPythonFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode">resetPythonCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPythonCode` <a name="resetPythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode"></a>

```typescript
public resetPythonCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolPythonFunction;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---


### CesToolSystemToolList <a name="CesToolSystemToolList" id="@cdktn/provider-google.cesTool.CesToolSystemToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolSystemToolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get"></a>

```typescript
public get(index: number): CesToolSystemToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesToolSystemToolOutputReference <a name="CesToolSystemToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolSystemToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesToolSystemTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a>

---


### CesToolTimeoutsOutputReference <a name="CesToolTimeoutsOutputReference" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer"></a>

```typescript
import { cesTool } from '@cdktn/provider-google'

new cesTool.CesToolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---



